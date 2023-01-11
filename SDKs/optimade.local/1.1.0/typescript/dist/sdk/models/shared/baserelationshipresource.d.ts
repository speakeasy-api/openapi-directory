import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specific meta field for base relationship resource
**/
export declare class BaseRelationshipResourceBaseRelationshipMeta extends SpeakeasyBase {
    description: string;
}
/**
 * Minimum requirements to represent a relationship resource
**/
export declare class BaseRelationshipResource extends SpeakeasyBase {
    id: string;
    meta?: BaseRelationshipResourceBaseRelationshipMeta;
    type: string;
}
