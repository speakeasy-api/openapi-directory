import { SpeakeasyBase } from "../../../internal/utils";
import { TensorflowTensorProto } from "./tensorflowtensorproto";
/**
 * Protocol buffer representing the serialization format of DT_VARIANT tensors.
 */
export declare class TensorflowVariantTensorDataProto extends SpeakeasyBase {
    /**
     * Portions of the object that are not Tensors.
     */
    metadata?: string;
    /**
     * Tensors contained within objects being serialized.
     */
    tensors?: TensorflowTensorProto[];
    /**
     * Name of the type of objects being serialized.
     */
    typeName?: string;
}
