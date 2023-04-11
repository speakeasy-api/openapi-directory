import { SpeakeasyBase } from "../../../internal/utils";
import { TensorShapeProtoDim } from "./tensorshapeprotodim";
/**
 * Dimensions of a tensor.
 */
export declare class TensorflowTensorShapeProto extends SpeakeasyBase {
    /**
     * Dimensions of the tensor, such as {"input", 30}, {"output", 40} for a 30 x 40 2D tensor.  If an entry has size -1, this corresponds to a dimension of unknown size. The names are optional.
     *
     * @remarks
     * The order of entries in "dim" matters: It indicates the layout of the values in the tensor in-memory representation.
     * The first entry in "dim" is the outermost dimension used to layout the values, the last entry is the innermost dimension.  This matches the in-memory layout of RowMajor Eigen tensors.
     * If "dim.size()" > 0, "unknown_rank" must be false.
     */
    dim?: TensorShapeProtoDim[];
    /**
     * If true, the number of dimensions in the shape is unknown.
     *
     * @remarks
     * If true, "dim.size()" must be 0.
     */
    unknownRank?: boolean;
}
