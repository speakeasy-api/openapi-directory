import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The thermal printer dialect.
 */
export declare enum GetExportThermalPrintBelegeBelegUuidDialectEnum {
    Escpos = "escpos",
    Escposlite = "escposlite",
    Star = "star",
    Text = "text"
}
/**
 * The encoding of the binary data.
 */
export declare enum GetExportThermalPrintBelegeBelegUuidEncodingEnum {
    Raw = "raw",
    Base64 = "base64"
}
export declare class GetExportThermalPrintBelegeBelegUuidRequest extends SpeakeasyBase {
    /**
     * The `_uuid` of a particular `Beleg` to export.
     */
    belegUuid: string;
    /**
     * The thermal printer dialect.
     */
    dialect?: GetExportThermalPrintBelegeBelegUuidDialectEnum;
    /**
     * The encoding of the binary data.
     */
    encoding?: GetExportThermalPrintBelegeBelegUuidEncodingEnum;
    /**
     * Should the RKSV QR code should be rendered?
     */
    qr?: boolean;
    /**
     * Number of characters per line.
     */
    width?: number;
}
export declare class GetExportThermalPrintBelegeBelegUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
