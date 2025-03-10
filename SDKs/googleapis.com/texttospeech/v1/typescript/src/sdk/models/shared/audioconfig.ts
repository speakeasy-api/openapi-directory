/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Required. The format of the audio byte stream.
 */
export enum AudioConfigAudioEncodingEnum {
  AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED",
  Linear16 = "LINEAR16",
  Mp3 = "MP3",
  OggOpus = "OGG_OPUS",
  Mulaw = "MULAW",
  Alaw = "ALAW",
}

/**
 * Description of audio data to be synthesized.
 */
export class AudioConfig extends SpeakeasyBase {
  /**
   * Required. The format of the audio byte stream.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "audioEncoding" })
  audioEncoding?: AudioConfigAudioEncodingEnum;

  /**
   * Optional. Input only. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given. See [audio profiles](https://cloud.google.com/text-to-speech/docs/audio-profiles) for current supported profile ids.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "effectsProfileId" })
  effectsProfileId?: string[];

  /**
   * Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pitch" })
  pitch?: number;

  /**
   * Optional. The synthesis sample rate (in hertz) for this audio. When this is specified in SynthesizeSpeechRequest, if this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality), unless the specified sample rate is not supported for the encoding chosen, in which case it will fail the request and return google.rpc.Code.INVALID_ARGUMENT.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sampleRateHertz" })
  sampleRateHertz?: number;

  /**
   * Optional. Input only. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "speakingRate" })
  speakingRate?: number;

  /**
   * Optional. Input only. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. Strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "volumeGainDb" })
  volumeGainDb?: number;
}
