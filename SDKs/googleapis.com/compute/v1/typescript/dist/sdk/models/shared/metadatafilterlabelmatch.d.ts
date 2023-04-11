import { SpeakeasyBase } from "../../../internal/utils";
/**
 * MetadataFilter label name value pairs that are expected to match corresponding labels presented as metadata to the load balancer.
 */
export declare class MetadataFilterLabelMatch extends SpeakeasyBase {
    /**
     * Name of metadata label. The name can have a maximum length of 1024 characters and must be at least 1 character long.
     */
    name?: string;
    /**
     * The value of the label must match the specified value. value can have a maximum length of 1024 characters.
     */
    value?: string;
}
