import { SpeakeasyBase } from "../../../internal/utils";
import { AccountFilter } from "./accountfilter";
import { AccountSelectionCardinalityEnum } from "./accountselectioncardinalityenum";
/**
 * Scope of required and optional account features or content from a ConnectedApplication.
**/
export declare class RequestedScopes extends SpeakeasyBase {
    accountFilters?: AccountFilter;
    accountSelectionCardinality: AccountSelectionCardinalityEnum;
    optionalProductAccess: Record<string, any>;
    requiredProductAccess: Record<string, any>;
}
