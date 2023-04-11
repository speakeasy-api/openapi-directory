import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum MembershipsRecentlyChangedFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class MembershipsRecentlyChangedRequest extends SpeakeasyBase {
    /**
     * The number of days since memberships were updated. For example, if you pass <code>3</code>, you'll receive all memberships that have been updated in the past 3 days. Valid entries are: <code>1</code>, <code>2</code> ... <code>30</code>
     */
    days: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: MembershipsRecentlyChangedFormatEnum;
}
export declare class MembershipsRecentlyChangedResponse extends SpeakeasyBase {
    contentType: string;
    memberships?: shared.Membership[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
