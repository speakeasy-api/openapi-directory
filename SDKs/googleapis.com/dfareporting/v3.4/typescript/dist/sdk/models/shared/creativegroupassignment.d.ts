import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Creative group number of the creative group assignment.
 */
export declare enum CreativeGroupAssignmentCreativeGroupNumberEnum {
    CreativeGroupOne = "CREATIVE_GROUP_ONE",
    CreativeGroupTwo = "CREATIVE_GROUP_TWO"
}
/**
 * Creative Group Assignment.
 */
export declare class CreativeGroupAssignment extends SpeakeasyBase {
    /**
     * ID of the creative group to be assigned.
     */
    creativeGroupId?: string;
    /**
     * Creative group number of the creative group assignment.
     */
    creativeGroupNumber?: CreativeGroupAssignmentCreativeGroupNumberEnum;
}
