import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One dimension of the tensor.
 */
export declare class TensorShapeProtoDim extends SpeakeasyBase {
    /**
     * Optional name of the tensor dimension.
     */
    name?: string;
    /**
     * Size of the tensor in that dimension. This value must be >= -1, but values of -1 are reserved for "unknown" shapes (values of -1 mean "unknown" dimension).  Certain wrappers that work with TensorShapeProto may fail at runtime when deserializing a TensorShapeProto containing a dim value of -1.
     */
    size?: string;
}
