import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * Structured results that are returned as part of search request.
 */
export declare class StructuredResult extends SpeakeasyBase {
    /**
     * Object to represent a person.
     */
    person?: Person;
}
