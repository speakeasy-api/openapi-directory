import { SpeakeasyBase } from "../../../internal/utils";
import { AbuseType } from "./abusetype";
import { Entity } from "./entity";
import { RelatedEntity } from "./relatedentity";
/**
 * Successful response
 */
export declare class AbuseReport extends SpeakeasyBase {
    abuseTypes?: AbuseType[];
    description?: string;
    relatedEntities?: RelatedEntity[];
    subject?: Entity;
}
