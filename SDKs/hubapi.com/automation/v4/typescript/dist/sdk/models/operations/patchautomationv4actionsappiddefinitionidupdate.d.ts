import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest extends SpeakeasyBase {
    /**
     * The custom workflow action fields to be updated.
     */
    extensionActionDefinitionPatch: shared.ExtensionActionDefinitionPatch;
    appId: number;
    /**
     * The ID of the custom workflow action.
     */
    definitionId: string;
}
export declare class PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    extensionActionDefinition?: shared.ExtensionActionDefinition;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
