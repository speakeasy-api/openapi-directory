import { SpeakeasyBase } from "../../../internal/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource } from "./grafeasv1slsaprovenancezerotwoslsaconfigsource";
/**
 * Identifies the event that kicked off the build.
 */
export declare class GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation extends SpeakeasyBase {
    /**
     * Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.
     */
    configSource?: GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource;
    environment?: Record<string, any>;
    parameters?: Record<string, any>;
}
