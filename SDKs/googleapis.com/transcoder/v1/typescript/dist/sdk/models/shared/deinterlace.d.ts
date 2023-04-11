import { SpeakeasyBase } from "../../../internal/utils";
import { BwdifConfig } from "./bwdifconfig";
import { YadifConfig } from "./yadifconfig";
/**
 * Deinterlace configuration for input video.
 */
export declare class Deinterlace extends SpeakeasyBase {
    /**
     * Bob Weaver Deinterlacing Filter Configuration.
     */
    bwdif?: BwdifConfig;
    /**
     * Yet Another Deinterlacing Filter Configuration.
     */
    yadif?: YadifConfig;
}
