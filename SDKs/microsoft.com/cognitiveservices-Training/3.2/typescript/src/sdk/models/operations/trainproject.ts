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


export class TrainProjectRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  trainingParameters?: shared.TrainingParameters;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  trainingParameters1?: shared.TrainingParameters;
}


export class TrainProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrainProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: TrainProjectQueryParams;

  @SpeakeasyMetadata()
  request?: TrainProjectRequests;
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
