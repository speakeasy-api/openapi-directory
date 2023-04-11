import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAutomationV4ActionsAppIdCreateSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class PostAutomationV4ActionsAppIdCreateRequest extends SpeakeasyBase {
    /**
     * The custom workflow action to create.
     */
    extensionActionDefinitionInput: shared.ExtensionActionDefinitionInput;
    appId: number;
}
export declare class PostAutomationV4ActionsAppIdCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    extensionActionDefinition?: shared.ExtensionActionDefinition;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
