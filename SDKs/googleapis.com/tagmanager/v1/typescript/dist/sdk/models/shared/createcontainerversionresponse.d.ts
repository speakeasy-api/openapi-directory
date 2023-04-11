import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
/**
 * Create container versions response.
 */
export declare class CreateContainerVersionResponse extends SpeakeasyBase {
    /**
     * Compiler errors or not.
     */
    compilerError?: boolean;
    /**
     * Represents a Google Tag Manager Container Version.
     */
    containerVersion?: ContainerVersion;
}
