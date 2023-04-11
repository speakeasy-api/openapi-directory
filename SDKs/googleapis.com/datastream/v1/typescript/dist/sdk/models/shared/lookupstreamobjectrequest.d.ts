import { SpeakeasyBase } from "../../../internal/utils";
import { SourceObjectIdentifier } from "./sourceobjectidentifier";
/**
 * Request for looking up a specific stream object by its source object identifier.
 */
export declare class LookupStreamObjectRequest extends SpeakeasyBase {
    /**
     * Represents an identifier of an object in the data source.
     */
    sourceObjectIdentifier?: SourceObjectIdentifier;
}
