import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomationV4ActionsAppIdGetPageSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetAutomationV4ActionsAppIdGetPageRequest extends SpeakeasyBase {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.
     */
    after?: string;
    appId: number;
    /**
     * Whether to include archived custom actions.
     */
    archived?: boolean;
    /**
     * Maximum number of results per page.
     */
    limit?: number;
}
export declare class GetAutomationV4ActionsAppIdGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    collectionResponseExtensionActionDefinitionForwardPaging?: shared.CollectionResponseExtensionActionDefinitionForwardPaging;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
