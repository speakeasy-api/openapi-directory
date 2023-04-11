import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { Thumbnail } from "./thumbnail";
import { ToolOutputReference } from "./tooloutputreference";
/**
 * An image, with a link to the main image and a thumbnail.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * A reference to a ToolExecution output file.
     */
    sourceImage?: ToolOutputReference;
    /**
     * The step to which the image is attached. Always set.
     */
    stepId?: string;
    /**
     * A single thumbnail, with its size and format.
     */
    thumbnail?: Thumbnail;
}
