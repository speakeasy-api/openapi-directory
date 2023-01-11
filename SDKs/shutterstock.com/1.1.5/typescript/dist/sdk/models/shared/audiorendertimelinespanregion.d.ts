import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AudioRenderTimelineSpanRegionEndTypeEventEnum {
    Ending = "ending",
    Transition = "transition"
}
export declare enum AudioRenderTimelineSpanRegionEndTypeTypeEnum {
    Ringout = "ringout",
    Cut = "cut"
}
/**
 * A high-level description of how a region ends
**/
export declare class AudioRenderTimelineSpanRegionEndType extends SpeakeasyBase {
    beat: number;
    event: AudioRenderTimelineSpanRegionEndTypeEventEnum;
    type: AudioRenderTimelineSpanRegionEndTypeTypeEnum;
}
export declare enum AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum {
    DoubleFlat = "double flat",
    Flat = "flat",
    Natural = "natural",
    Sharp = "sharp",
    DoubleSharp = "double sharp"
}
export declare enum AudioRenderTimelineSpanRegionKeyTonicNoteEnum {
    C = "c",
    D = "d",
    E = "e",
    F = "f",
    G = "g",
    A = "a",
    B = "b"
}
export declare enum AudioRenderTimelineSpanRegionKeyTonicQualityEnum {
    Major = "major",
    NaturalMinor = "natural_minor",
    HarmonicMinor = "harmonic_minor",
    MelodicMinor = "melodic_minor",
    Ionian = "ionian",
    Dorian = "dorian",
    Phrygian = "phrygian",
    Lydian = "lydian",
    Mixolydian = "mixolydian",
    Aeolian = "aeolian",
    Locrian = "locrian"
}
/**
 * The key signature active at the beginning of the region
**/
export declare class AudioRenderTimelineSpanRegionKey extends SpeakeasyBase {
    tonicAccidental?: AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum;
    tonicNote?: AudioRenderTimelineSpanRegionKeyTonicNoteEnum;
    tonicQuality?: AudioRenderTimelineSpanRegionKeyTonicQualityEnum;
}
export declare enum AudioRenderTimelineSpanRegionRegionEnum {
    Music = "music",
    Silence = "silence"
}
/**
 * A period of music or silence, measured in beats
**/
export declare class AudioRenderTimelineSpanRegion extends SpeakeasyBase {
    beat: number;
    descriptor: string;
    endType?: AudioRenderTimelineSpanRegionEndType;
    id: number;
    key?: AudioRenderTimelineSpanRegionKey;
    region: AudioRenderTimelineSpanRegionRegionEnum;
}
