import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest extends SpeakeasyBase {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.
     */
    after?: string;
    appId: number;
    /**
     * The ID of the custom workflow action
     */
    definitionId: string;
    /**
     * Maximum number of results per page.
     */
    limit?: number;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    collectionResponseActionRevisionForwardPaging?: shared.CollectionResponseActionRevisionForwardPaging;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
