import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum DriversFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class DriversRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: DriversFormatEnum;
}
export declare class DriversResponse extends SpeakeasyBase {
    contentType: string;
    drivers?: shared.Driver[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
