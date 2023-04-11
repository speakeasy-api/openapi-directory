import { SpeakeasyBase } from "../../../internal/utils";
import { ExtensionActionDefinition } from "./extensionactiondefinition";
import { ForwardPaging } from "./forwardpaging";
/**
 * successful operation
 */
export declare class CollectionResponseExtensionActionDefinitionForwardPaging extends SpeakeasyBase {
    paging?: ForwardPaging;
    results: ExtensionActionDefinition[];
}
