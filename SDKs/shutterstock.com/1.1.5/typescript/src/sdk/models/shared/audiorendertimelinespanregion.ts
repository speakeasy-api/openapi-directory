import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AudioRenderTimelineSpanRegionEndTypeEventEnum {
    Ending = "ending",
    Transition = "transition"
}

export enum AudioRenderTimelineSpanRegionEndTypeTypeEnum {
    Ringout = "ringout",
    Cut = "cut"
}


// AudioRenderTimelineSpanRegionEndType
/** 
 * A high-level description of how a region ends
**/
export class AudioRenderTimelineSpanRegionEndType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beat" })
  beat: number;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event: AudioRenderTimelineSpanRegionEndTypeEventEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AudioRenderTimelineSpanRegionEndTypeTypeEnum;
}

export enum AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum {
    DoubleFlat = "double flat",
    Flat = "flat",
    Natural = "natural",
    Sharp = "sharp",
    DoubleSharp = "double sharp"
}

export enum AudioRenderTimelineSpanRegionKeyTonicNoteEnum {
    C = "c",
    D = "d",
    E = "e",
    F = "f",
    G = "g",
    A = "a",
    B = "b"
}

export enum AudioRenderTimelineSpanRegionKeyTonicQualityEnum {
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


// AudioRenderTimelineSpanRegionKey
/** 
 * The key signature active at the beginning of the region
**/
export class AudioRenderTimelineSpanRegionKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tonic_accidental" })
  tonicAccidental?: AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum;

  @SpeakeasyMetadata({ data: "json, name=tonic_note" })
  tonicNote?: AudioRenderTimelineSpanRegionKeyTonicNoteEnum;

  @SpeakeasyMetadata({ data: "json, name=tonic_quality" })
  tonicQuality?: AudioRenderTimelineSpanRegionKeyTonicQualityEnum;
}

export enum AudioRenderTimelineSpanRegionRegionEnum {
    Music = "music",
    Silence = "silence"
}


// AudioRenderTimelineSpanRegion
/** 
 * A period of music or silence, measured in beats
**/
export class AudioRenderTimelineSpanRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beat" })
  beat: number;

  @SpeakeasyMetadata({ data: "json, name=descriptor" })
  descriptor: string;

  @SpeakeasyMetadata({ data: "json, name=end_type" })
  endType?: AudioRenderTimelineSpanRegionEndType;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: AudioRenderTimelineSpanRegionKey;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: AudioRenderTimelineSpanRegionRegionEnum;
}
