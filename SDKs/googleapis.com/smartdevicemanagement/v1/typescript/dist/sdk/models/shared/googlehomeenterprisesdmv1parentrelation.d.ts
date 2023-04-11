import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents device relationships, for instance, structure/room to which the device is assigned to.
 */
export declare class GoogleHomeEnterpriseSdmV1ParentRelation extends SpeakeasyBase {
    /**
     * Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to.
     */
    displayName?: string;
    /**
     * Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123"
     */
    parent?: string;
}
