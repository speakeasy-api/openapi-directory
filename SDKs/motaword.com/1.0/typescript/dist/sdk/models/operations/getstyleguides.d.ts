import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetStyleGuidesWithEnum {
    Preview = "preview"
}
export declare class GetStyleGuidesRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    projectId: number;
    /**
     * Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
     */
    with?: GetStyleGuidesWithEnum[];
}
export declare class GetStyleGuidesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of style guide models
     */
    styleGuideList?: shared.StyleGuideList;
}
