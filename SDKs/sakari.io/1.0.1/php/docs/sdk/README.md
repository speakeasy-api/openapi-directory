# SDK

## Overview

# Introduction

Welcome to the documentation for the Sakari Messaging REST API. 

Sakari provides an advanced platform to drive large scale customized SMS communication

REST is a web-service protocol that lends itself to rapid development by using everyday HTTP and JSON technology.

To find out more about our product offering, please visit [https://sakari.io](https://sakari.io).

# Quickstart

For your convenience we have created a quickstart guide to get you up and running in 5 minutes. 

[https://sakari.io/blog/sakari-api-quickstart](https://sakari.io/blog/sakari-api-quickstart)

# PostMan Collection

We've created a simple set of examples using [PostMan](https://www.getpostman.com/) Simply click below to import these. You will need to setup three environment variables in PostMan - AccountId, ClientId and ClientSecret. Check out our PostMan blog post for more information

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d616e273edc916a7a6eb)

# Finding your client id, client secret and account id

To authenticate against the API's you will need three key pieces of data
 - client id
 - client secret
 - account id

To retrieve these, simply login into [https://hub.sakari.io](https://hub.sakari.io) and click on the "cog" in the top right corner. In the popup dialog at the bottom you should see your API credentials and account id. If these are not visible you will need to click on "Request Credentials"

# Versioning

With any breaking changes we will introduce a new version of the API. The latest version is v1.

The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break.

# Testing

There are numerous tools available for testing the API's. We will include examples using curl and the client SDKs that we have created. If you would like to see an SDK in a language not currently available, please let us know.

# Throttling / Limits

Our API's have been specifically designed to support bulk messaging in a single API call. We therefore impose limits on the frequency of calling the APIs to prevent abuse or runaway processes. If you feel you need a higher limit, please contact us. If you hit the limit you will get a 429 error code returned from our servers

# Errors

The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:

```
{
  "success": false,
  "error": {
    "code": "CONT-001",
    "message": "Invalid mobile number"
  }
}
```

# Pagination

For performance, most GET calls return a subset of data. This data is paginated for easy access. Most APIs which return collections of data will return a pagination object as such:

```
{
  "pagination": {
    "offset": 0,
    "limit": 10
    "totalCount": 21
  }  
}
```

When making calls to the API, you can adjust the slice of data returned using query parameters such as:

`` https://api.sakari.io/v1/accounts/123/contacts?offset=20&limit=25 ``

This will return 25 contacts with an offset of 20.


Find out more about Sakari
<https://sakari.io>
### Available Operations

