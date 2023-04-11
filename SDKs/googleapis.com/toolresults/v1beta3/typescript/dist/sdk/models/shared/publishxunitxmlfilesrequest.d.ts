import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * Request message for StepService.PublishXunitXmlFiles.
 */
export declare class PublishXunitXmlFilesRequest extends SpeakeasyBase {
    /**
     * URI of the Xunit XML files to publish. The maximum size of the file this reference is pointing to is 50MB. Required.
     */
    xunitXmlFiles?: FileReference[];
}
