import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest extends SpeakeasyBase {
    appId: number;
    /**
     * The ID of the custom workflow action.
     */
    definitionId: string;
}
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
