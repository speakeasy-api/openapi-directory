import { SpeakeasyBase } from "../../../internal/utils";
import { TensorflowDataTypeEnum } from "./tensorflowdatatypeenum";
import { TensorflowResourceHandleProto } from "./tensorflowresourcehandleproto";
import { TensorflowTensorShapeProto } from "./tensorflowtensorshapeproto";
import { TensorflowVariantTensorDataProto } from "./tensorflowvarianttensordataproto";
/**
 * Protocol buffer representing a tensor.
 */
export declare class TensorflowTensorProto extends SpeakeasyBase {
    boolVal?: boolean[];
    /**
     * DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real and imaginary parts of i-th double precision complex.
     */
    dcomplexVal?: number[];
    /**
     * DT_DOUBLE.
     */
    doubleVal?: number[];
    /**
     * - DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field has not been set. - DT_FLOAT: Data types that all computation devices are expected to be capable to support. - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above should have a corresponding value below (verified by types_test).
     */
    dtype?: TensorflowDataTypeEnum;
    /**
     * DT_FLOAT.
     */
    floatVal?: number[];
    /**
     * DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll have some pointless zero padding for each value here.
     */
    halfVal?: number[];
    int64Val?: string[];
    /**
     * DT_INT32, DT_INT16, DT_INT8, DT_UINT8.
     */
    intVal?: number[];
    resourceHandleVal?: TensorflowResourceHandleProto[];
    /**
     * DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real and imaginary parts of i-th single precision complex.
     */
    scomplexVal?: number[];
    stringVal?: string[];
    /**
     * Serialized raw tensor content from either Tensor::AsProtoTensorContent or memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation can be used for all tensor types. The purpose of this representation is to reduce serialization overhead during RPC call by avoiding serialization of many repeated small items.
     */
    tensorContent?: string;
    /**
     * Dimensions of a tensor.
     */
    tensorShape?: TensorflowTensorShapeProto;
    uint32Val?: number[];
    uint64Val?: string[];
    variantVal?: TensorflowVariantTensorDataProto[];
    /**
     * Version number.
     *
     * @remarks
     * In version 0, if the "repeated xxx" representations contain only one element, that element is repeated to fill the shape.  This makes it easy to represent a constant Tensor with a single value.
     */
    versionNumber?: number;
}
