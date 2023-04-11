import { SpeakeasyBase } from "../../../internal/utils";
import { EntityMappingLogEntry } from "./entitymappinglogentry";
/**
 * Details of the mappings of a database entity.
 */
export declare class EntityMapping extends SpeakeasyBase {
    /**
     * Target entity full name. The draft entity can also include a column, index or constraint using the same naming notation schema.table.column.
     */
    draftEntity?: string;
    /**
     * Entity mapping log entries. Multiple rules can be effective and contribute changes to a converted entity, such as a rule can handle the entity name, another rule can handle an entity type. In addition, rules which did not change the entity are also logged along with the reason preventing them to do so.
     */
    mappingLog?: EntityMappingLogEntry[];
    /**
     * Source entity full name. The source entity can also be a column, index or constraint using the same naming notation schema.table.column.
     */
    sourceEntity?: string;
}
