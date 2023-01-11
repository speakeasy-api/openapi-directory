import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Addons } from "./addons";
import { Base } from "./base";
import { Citations } from "./citations";
import { Collections } from "./collections";
import { Comments } from "./comments";
import { Files } from "./files";
import { Institutions } from "./institutions";
import { Licenses } from "./licenses";
import { Logs } from "./logs";
import { Metaschemas } from "./metaschemas";
import { Nodes } from "./nodes";
import { PreprintProviders } from "./preprintproviders";
import { Preprints } from "./preprints";
import { Registrations } from "./registrations";
import { Taxonomies } from "./taxonomies";
import { Users } from "./users";
import { ViewOnlyLinks } from "./viewonlylinks";
import { Wikis } from "./wikis";


export const ServerList = [
	"https://test-api.osf.io/v2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public addons: Addons;
  public base: Base;
  public citations: Citations;
  public collections: Collections;
  public comments: Comments;
  public files: Files;
  public institutions: Institutions;
  public licenses: Licenses;
  public logs: Logs;
  public metaschemas: Metaschemas;
  public nodes: Nodes;
  public preprintProviders: PreprintProviders;
  public preprints: Preprints;
  public registrations: Registrations;
  public taxonomies: Taxonomies;
  public users: Users;
  public viewOnlyLinks: ViewOnlyLinks;
  public wikis: Wikis;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.addons = new Addons(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.base = new Base(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.citations = new Citations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.collections = new Collections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.comments = new Comments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.files = new Files(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.institutions = new Institutions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.licenses = new Licenses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.logs = new Logs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.metaschemas = new Metaschemas(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.nodes = new Nodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.preprintProviders = new PreprintProviders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.preprints = new Preprints(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.registrations = new Registrations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.taxonomies = new Taxonomies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.viewOnlyLinks = new ViewOnlyLinks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.wikis = new Wikis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}