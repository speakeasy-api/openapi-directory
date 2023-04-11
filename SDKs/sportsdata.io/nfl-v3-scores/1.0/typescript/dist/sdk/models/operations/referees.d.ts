import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum RefereesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class RefereesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: RefereesFormatEnum;
}
export declare class RefereesResponse extends SpeakeasyBase {
    contentType: string;
    referees?: shared.Referee[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
