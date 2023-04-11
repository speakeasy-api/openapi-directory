import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayData } from "./displaydata";
/**
 * Type of transform.
 */
export declare enum TransformSummaryKindEnum {
    UnknownKind = "UNKNOWN_KIND",
    ParDoKind = "PAR_DO_KIND",
    GroupByKeyKind = "GROUP_BY_KEY_KIND",
    FlattenKind = "FLATTEN_KIND",
    ReadKind = "READ_KIND",
    WriteKind = "WRITE_KIND",
    ConstantKind = "CONSTANT_KIND",
    SingletonKind = "SINGLETON_KIND",
    ShuffleKind = "SHUFFLE_KIND"
}
/**
 * Description of the type, names/ids, and input/outputs for a transform.
 */
export declare class TransformSummary extends SpeakeasyBase {
    /**
     * Transform-specific display data.
     */
    displayData?: DisplayData[];
    /**
     * SDK generated id of this transform instance.
     */
    id?: string;
    /**
     * User names for all collection inputs to this transform.
     */
    inputCollectionName?: string[];
    /**
     * Type of transform.
     */
    kind?: TransformSummaryKindEnum;
    /**
     * User provided name for this transform instance.
     */
    name?: string;
    /**
     * User names for all collection outputs to this transform.
     */
    outputCollectionName?: string[];
}
