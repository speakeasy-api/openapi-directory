import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum DriverDetailsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class DriverDetailsRequest extends SpeakeasyBase {
    /**
     * Unique FantasyData Driver ID.
     *
     * @remarks
     * Example:<code>80000268</code>.
     */
    driverid: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: DriverDetailsFormatEnum;
}
export declare class DriverDetailsResponse extends SpeakeasyBase {
    contentType: string;
    driver?: shared.Driver;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
