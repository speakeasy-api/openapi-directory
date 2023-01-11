import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { ApiInfo } from "./apiinfo";
import { AssessmentData } from "./assessmentdata";
import { AssessmentGroups } from "./assessmentgroups";
import { AssessmentManagement } from "./assessmentmanagement";
import { Badges } from "./badges";
import { Channels } from "./channels";
import { CourseMappings } from "./coursemappings";
import { CourseMetadata } from "./coursemetadata";
import { Courses } from "./courses";
import { LearnerActivity } from "./learneractivity";
import { OfferingLearners } from "./offeringlearners";
import { OfferingMetadata } from "./offeringmetadata";
import { Offerings } from "./offerings";
import { Organisation } from "./organisation";
import { Pulses } from "./pulses";
import { UsersInIQualify } from "./usersiniqualify";


export const ServerList = [
	"https://api.iqualify.com/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public apiInfo: ApiInfo;
  public assessmentData: AssessmentData;
  public assessmentGroups: AssessmentGroups;
  public assessmentManagement: AssessmentManagement;
  public badges: Badges;
  public channels: Channels;
  public courseMappings: CourseMappings;
  public courseMetadata: CourseMetadata;
  public courses: Courses;
  public learnerActivity: LearnerActivity;
  public offeringLearners: OfferingLearners;
  public offeringMetadata: OfferingMetadata;
  public offerings: Offerings;
  public organisation: Organisation;
  public pulses: Pulses;
  public usersInIQualify: UsersInIQualify;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.apiInfo = new ApiInfo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.assessmentData = new AssessmentData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.assessmentGroups = new AssessmentGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.assessmentManagement = new AssessmentManagement(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.badges = new Badges(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channels = new Channels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.courseMappings = new CourseMappings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.courseMetadata = new CourseMetadata(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.courses = new Courses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.learnerActivity = new LearnerActivity(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.offeringLearners = new OfferingLearners(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.offeringMetadata = new OfferingMetadata(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.offerings = new Offerings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.organisation = new Organisation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pulses = new Pulses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.usersInIQualify = new UsersInIQualify(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}