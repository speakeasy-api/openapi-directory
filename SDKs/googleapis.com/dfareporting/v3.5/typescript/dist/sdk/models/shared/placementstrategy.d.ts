import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains properties of a placement strategy.
 */
export declare class PlacementStrategy extends SpeakeasyBase {
    /**
     * Account ID of this placement strategy.This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * ID of this placement strategy. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy".
     */
    kind?: string;
    /**
     * Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account.
     */
    name?: string;
}
