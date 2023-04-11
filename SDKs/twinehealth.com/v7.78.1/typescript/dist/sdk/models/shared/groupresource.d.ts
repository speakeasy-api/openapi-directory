import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupResourceAttributes extends SpeakeasyBase {
    /**
     * A description of the group
     */
    bio?: string;
    /**
     * The name of the group
     */
    name: string;
}
export declare class GroupResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare enum GroupResourceTypeEnum {
    Group = "group"
}
export declare class GroupResource extends SpeakeasyBase {
    attributes: GroupResourceAttributes;
    id: string;
    links?: GroupResourceLinks;
    type: GroupResourceTypeEnum;
}
export declare class GroupResourceInput extends SpeakeasyBase {
    attributes: GroupResourceAttributes;
    id: string;
    type: GroupResourceTypeEnum;
}
