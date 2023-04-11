import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SceneTransitionStyleEnum {
    Fade = "fade",
    Wipeleft = "wipeleft",
    Wiperight = "wiperight",
    Wipeup = "wipeup",
    Wipedown = "wipedown",
    Slideleft = "slideleft",
    Slideright = "slideright",
    Slideup = "slideup",
    Slidedown = "slidedown",
    Circlecrop = "circlecrop",
    Rectcrop = "rectcrop",
    Distance = "distance",
    Fadeblack = "fadeblack",
    Fadewhite = "fadewhite",
    Radial = "radial",
    Smoothleft = "smoothleft",
    Smoothright = "smoothright",
    Smoothup = "smoothup",
    Smoothdown = "smoothdown",
    Circleopen = "circleopen",
    Circleclose = "circleclose",
    Vertopen = "vertopen",
    Vertclose = "vertclose",
    Horzopen = "horzopen",
    Horzclose = "horzclose",
    Dissolve = "dissolve",
    Pixelize = "pixelize",
    Diagtl = "diagtl",
    Diagtr = "diagtr",
    Diagbl = "diagbl",
    Diagbr = "diagbr",
    Hlslice = "hlslice",
    Hrslice = "hrslice",
    Vuslice = "vuslice",
    Vdslice = "vdslice",
    Hblur = "hblur",
    Fadegrays = "fadegrays",
    Wipetl = "wipetl",
    Wipetr = "wipetr",
    Wipebl = "wipebl",
    Wipebr = "wipebr",
    Squeezeh = "squeezeh",
    Squeezev = "squeezev",
    Zoomin = "zoomin"
}
export declare enum SceneTransitionTypeEnum {
    Xfade = "xfade"
}
export declare class SceneTransition extends SpeakeasyBase {
    /**
     * Duration of the transition in seconds
     */
    duration?: number;
    style?: SceneTransitionStyleEnum;
    type?: SceneTransitionTypeEnum;
}
export declare class Scene extends SpeakeasyBase {
    /**
     * A hexadecimal representation of a color or 'transparent'
     */
    backgroundColor?: string;
    cache?: boolean;
    /**
     * Used for adding your comments
     */
    comment?: string;
    duration?: number;
    elements?: any[];
    transition?: SceneTransition;
}
