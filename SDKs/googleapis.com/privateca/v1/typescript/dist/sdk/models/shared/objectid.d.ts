import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
 */
export declare class ObjectId extends SpeakeasyBase {
    /**
     * Required. The parts of an OID path. The most significant parts of the path come first.
     */
    objectIdPath?: number[];
}
