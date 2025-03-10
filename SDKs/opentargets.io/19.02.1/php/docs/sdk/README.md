# SDK

## Overview

### The Open Targets Platform REST API

The Open Targets Platform API ('Application Programming Interface') allows programmatic retrieval of the Open Targets Platform data via a set of [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) services.

You can make calls to the latest version of our API using the base URL `https://platform-api.opentargets.io/v3/platform`. Please make sure you use `https` instead of the unencrypted `http` calls, which we do not accept.

We list below the methods available to query our data directly from the API, followed by an interactive interface that you can use to try out the parameters and execute the REST-API calls.

For every request you create, the interactive interface will display both a [curl](https://curl.haxx.se/) command and a request URL that you can use to ensure you get the expected response before using your application or workflow. 

Check our documentation for some [API tutorials](https://docs.targetvalidation.org/tutorials/api-tutorials) and [get in touch](mailto:support@targetvalidation.org) if you have any questions.

### Available Methods

The available methods can be grouped in three types:

* __public__ - Methods that serve the core set of our data. These are stable and we fully supported them.
* __private__ - Methods used by the web app to serve additional data not specific to our platform. These methods
may change without notice and should be used with caution.
* __utils__ - Methods to get statistics and technical data about our API.

### Supported formats

The methods above are all available via a `GET` request, and will serve outputs as `JSON`.

Alternative output formats, such `xml`, `csv` and `tab`, are also available for some of the methods. However alternative output formats are not supported in interactive interface below where the response will be always in `JSON.

If you have complex queries with large number of parameters, you should use a `POST` request instead of  `GET`. 
`POST` methods require a body encoded as `json`. When querying for a specific disease using the latest version of the API, your call would look like the example below:

```sh
curl -X POST -d '{"disease":["EFO_0000253"]}' --header 'Content-Type: application/json' https://platform-api.opentargets.io/v3/platform/public/evidence/filter
```
### How to interpret a response

Each HTTPS response will serve data in headers and body. The headers will give you details about your query, such as how long it took to run.

In the body of the response, you will find the data you have requested for in `JSON` format. The [jq](https://stedolan.github.io/jq/) program is a useful tool to parse the json response while on the command line.

```sh
curl https://platform-api.opentargets.io/v3/platform/public/association/filter\?target\=ENSG00000157764 | jq
```

We do not analyse the nature of any specific API queries except for the purposes of improving the performance of our API.
Read more in our [privacy section](https://www.targetvalidation.org/terms_of_use#privacy).

How can we make the Open Targets Platform API more useful to you? Would you like additional methods to be implemented?
Please [get in touch](mailto:support@targetvalidation.org) and send your suggestions.


### Available Operations

