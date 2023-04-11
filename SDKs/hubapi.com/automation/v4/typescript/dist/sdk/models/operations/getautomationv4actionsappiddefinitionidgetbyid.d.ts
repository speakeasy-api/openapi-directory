import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest extends SpeakeasyBase {
    appId: number;
    /**
     * Whether to include archived custom actions.
     */
    archived?: boolean;
    /**
     * The ID of the custom workflow action.
     */
    definitionId: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    extensionActionDefinition?: shared.ExtensionActionDefinition;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
