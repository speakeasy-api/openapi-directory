import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
/**
 * Publish container version response.
 */
export declare class PublishContainerVersionResponse extends SpeakeasyBase {
    /**
     * Compiler errors or not.
     */
    compilerError?: boolean;
    /**
     * Represents a Google Tag Manager Container Version.
     */
    containerVersion?: ContainerVersion;
}
