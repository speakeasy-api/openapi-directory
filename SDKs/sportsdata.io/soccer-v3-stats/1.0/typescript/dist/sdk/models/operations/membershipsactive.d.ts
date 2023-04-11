import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum MembershipsActiveFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsActiveRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: MembershipsActiveFormatEnum;
}
export declare class MembershipsActiveResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: shared.Membership[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
