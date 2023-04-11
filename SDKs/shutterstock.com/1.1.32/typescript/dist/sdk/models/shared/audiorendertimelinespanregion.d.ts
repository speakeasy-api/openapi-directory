import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of event
 */
export declare enum AudioRenderTimelineSpanRegionEndTypeEventEnum {
    Ending = "ending",
    Transition = "transition"
}
/**
 * The specific action to perform; if the event type is "ending" then this must be "ringout" and if event type is "transition" this must be "cut"
 */
export declare enum AudioRenderTimelineSpanRegionEndTypeTypeEnum {
    Ringout = "ringout",
    Cut = "cut"
}
/**
 * A high-level description of how a region ends
 */
export declare class AudioRenderTimelineSpanRegionEndType extends SpeakeasyBase {
    /**
     * The beat, relative to the start of the active region, at which the end_type begins; in other words, the ending starts on this beat of the region
     */
    beat: number;
    /**
     * The type of event
     */
    event: AudioRenderTimelineSpanRegionEndTypeEventEnum;
    /**
     * The specific action to perform; if the event type is "ending" then this must be "ringout" and if event type is "transition" this must be "cut"
     */
    type: AudioRenderTimelineSpanRegionEndTypeTypeEnum;
}
/**
 * A text representation of the accidental; if this field is specified, the tonic_note field should also be specified
 */
export declare enum AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum {
    DoubleFlat = "double flat",
    Flat = "flat",
    Natural = "natural",
    Sharp = "sharp",
    DoubleSharp = "double sharp"
}
/**
 * A text representation of the musical note; if this field is specified, the tonic_accidental field should also be specified
 */
export declare enum AudioRenderTimelineSpanRegionKeyTonicNoteEnum {
    C = "c",
    D = "d",
    E = "e",
    F = "f",
    G = "g",
    A = "a",
    B = "b"
}
/**
 * The scale quality; if this field is not specified, the API selects the quality automatically
 */
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
 */
export declare class AudioRenderTimelineSpanRegionKey extends SpeakeasyBase {
    /**
     * A text representation of the accidental; if this field is specified, the tonic_note field should also be specified
     */
    tonicAccidental?: AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum;
    /**
     * A text representation of the musical note; if this field is specified, the tonic_accidental field should also be specified
     */
    tonicNote?: AudioRenderTimelineSpanRegionKeyTonicNoteEnum;
    /**
     * The scale quality; if this field is not specified, the API selects the quality automatically
     */
    tonicQuality?: AudioRenderTimelineSpanRegionKeyTonicQualityEnum;
}
/**
 * The type of region
 */
export declare enum AudioRenderTimelineSpanRegionRegionEnum {
    Music = "music",
    Silence = "silence"
}
/**
 * A period of music or silence, measured in beats
 */
export declare class AudioRenderTimelineSpanRegion extends SpeakeasyBase {
    /**
     * The beat, relative to the span, at which the region object's music begins
     */
    beat: number;
    /**
     * The descriptor ID needed to compose the music
     */
    descriptor: string;
    /**
     * A high-level description of how a region ends
     */
    endType?: AudioRenderTimelineSpanRegionEndType;
    /**
     * An identifier which must be unique within the parent span
     */
    id: number;
    /**
     * The key signature active at the beginning of the region
     */
    key?: AudioRenderTimelineSpanRegionKey;
    /**
     * The type of region
     */
    region: AudioRenderTimelineSpanRegionRegionEnum;
}
