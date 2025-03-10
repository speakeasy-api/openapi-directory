/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResultCalls } from "./resultcalls";
import { ResultStandardizedCoefficients } from "./resultstandardizedcoefficients";
import { Expose, Type } from "class-transformer";

export class Result extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: 'calls"' })
  @Type(() => ResultCalls)
  calls?: ResultCalls;

  /**
   * number of data rows processed
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data_count" })
  dataCount?: number;

  /**
   * either month or week
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dates_converted_to" })
  datesConvertedTo?: string;

  /**
   * text for pdf footer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "footer" })
  footer?: string;

  /**
   * text for pdf header
   */
  @SpeakeasyMetadata()
  @Expose({ name: "header" })
  header?: string;

  /**
   * number of data rows used for analysis
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number_observations" })
  numberObservations?: number;

  /**
   * number of data rows used to test model accuracy
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number_tests" })
  numberTests?: number;

  /**
   * the name of the variable processed as the outcome
   */
  @SpeakeasyMetadata()
  @Expose({ name: "outcome_variable" })
  outcomeVariable?: string;

  /**
   * yes if paid subscriber, otherwise no
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paid" })
  paid?: string;

  /**
   * url of pdf summary
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pdf" })
  pdf?: string;

  /**
   * percentage accuracy of model created
   */
  @SpeakeasyMetadata()
  @Expose({ name: "prediction_mean_accuracy" })
  predictionMeanAccuracy?: number;

  @SpeakeasyMetadata({ elemType: ResultStandardizedCoefficients })
  @Expose({ name: "standardized_coefficients" })
  @Type(() => ResultStandardizedCoefficients)
  standardizedCoefficients?: ResultStandardizedCoefficients[];

  @SpeakeasyMetadata()
  @Expose({ name: "summary" })
  summary?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "tested_variables" })
  testedVariables?: string[];
}
