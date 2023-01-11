import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrainProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum TrainProjectTrainingTypeEnum {
    Regular = "Regular",
    Advanced = "Advanced"
}


export class TrainProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceTrain" })
  forceTrain?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notificationEmailAddress" })
  notificationEmailAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reservedBudgetInHours" })
  reservedBudgetInHours?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trainingType" })
  trainingType?: TrainProjectTrainingTypeEnum;
}


export class TrainProjectHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class TrainProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrainProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: TrainProjectQueryParams;

  @SpeakeasyMetadata()
  headers: TrainProjectHeaders;
}


export class TrainProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  iteration?: shared.Iteration;

  @SpeakeasyMetadata()
  statusCode: number;
}
