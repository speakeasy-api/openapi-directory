/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum {
  TelephonyDtmfUnspecified = "TELEPHONY_DTMF_UNSPECIFIED",
  DtmfOne = "DTMF_ONE",
  DtmfTwo = "DTMF_TWO",
  DtmfThree = "DTMF_THREE",
  DtmfFour = "DTMF_FOUR",
  DtmfFive = "DTMF_FIVE",
  DtmfSix = "DTMF_SIX",
  DtmfSeven = "DTMF_SEVEN",
  DtmfEight = "DTMF_EIGHT",
  DtmfNine = "DTMF_NINE",
  DtmfZero = "DTMF_ZERO",
  DtmfA = "DTMF_A",
  DtmfB = "DTMF_B",
  DtmfC = "DTMF_C",
  DtmfD = "DTMF_D",
  DtmfStar = "DTMF_STAR",
  DtmfPound = "DTMF_POUND",
}

/**
 * A wrapper of repeated TelephonyDtmf digits.
 */
export class GoogleCloudDialogflowV2beta1TelephonyDtmfEvents extends SpeakeasyBase {
  /**
   * A sequence of TelephonyDtmf digits.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dtmfEvents" })
  dtmfEvents?: GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum[];
}
