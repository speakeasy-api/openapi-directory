import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * Success
 */
export declare class PersonUpsert extends SpeakeasyBase {
    person?: Person;
    /**
     * The type of upsert. One of: create, update
     */
    upsertType?: string;
}
