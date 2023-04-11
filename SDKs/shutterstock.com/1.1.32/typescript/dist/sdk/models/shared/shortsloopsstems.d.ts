import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShortsLoopsStemsLoops extends SpeakeasyBase {
    url?: string;
}
export declare class ShortsLoopsStemsShorts extends SpeakeasyBase {
    url?: string;
}
export declare class ShortsLoopsStemsStems extends SpeakeasyBase {
    url?: string;
}
/**
 * Links for Shorts, Loops and Stems previews
 */
export declare class ShortsLoopsStems extends SpeakeasyBase {
    loops?: Record<string, ShortsLoopsStemsLoops>;
    shorts?: Record<string, ShortsLoopsStemsShorts>;
    stems?: Record<string, ShortsLoopsStemsStems>;
}
