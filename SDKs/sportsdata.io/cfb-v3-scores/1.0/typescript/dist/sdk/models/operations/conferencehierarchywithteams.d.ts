import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum ConferenceHierarchyWithTeamsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ConferenceHierarchyWithTeamsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: ConferenceHierarchyWithTeamsFormatEnum;
}
export declare class ConferenceHierarchyWithTeamsResponse extends SpeakeasyBase {
    conferences?: shared.Conference[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
