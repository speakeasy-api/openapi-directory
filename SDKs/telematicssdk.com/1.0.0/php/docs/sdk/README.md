# SDK

## Overview

# Introduction
We have prepared a set of APIs for quick start to integrate telematics SDK that powers mobile telematics inside 3rd party mobile applications.

* [CONTACT US](https://telematicssdk.com)
* [SANDBOX](https://userdatahub.com)
* [DEV.PORTAL](https://docs.telematicssdk.com)
* [DEMO APP](https://raxeltelematics.com/telematics-app)


# Overview
Datamotion provides telematics infrastructure for mobile applications. 

Telematics SDK turns any smartphone into telematics data gathering device to collect Location, driving and behavior data. API services unlocks power of your mobile application

There are 3 groups of methods:
* 1 - user management
* 2 - statistics for mobile app
* 3 - statistics for back-end(s)

in certain cases you will need SNS or any other notification services. read more [here](https://docs.telematicssdk.com/platform-features/sns)
# Possible architecture

There are three common schemes that are used by our clients. These schemes can be combined
* Collect, Process, Store (required: 1&2)
* Collect, Process (required: 1& sns)
* Collect (required 1&sns)


## Collect, Process, Store
![Collect, Process, Store](https://website-cliparts-datamotion.s3.us-east-2.amazonaws.com/Dev.portal/Architecture+-+Collection%2C+processing%2C+storage)

## Collect, Process
![Collect, Process](https://website-cliparts-datamotion.s3.us-east-2.amazonaws.com/Dev.portal/Architecture+-+Collection+and+processing)

## Collect
![Collect](https://website-cliparts-datamotion.s3.us-east-2.amazonaws.com/Dev.portal/Architecture+-+Collection+only)

***
![Telematic sdk](https://website-cliparts-datamotion.s3.us-east-2.amazonaws.com/Github/transportation_small.png)

# Common use-cases:
* Safe and efficient driving
* Usage-based insurance
* Safe driving assessment
* Driver assessment
* Trip log
* Geo-analysis
* Accident monitoring
* Driving engagements
* Location based services
* Realtime Tracking
and beyond

# How to start
* Register a [SANDBOX ACCOUNT](https://userdatahub.com)
* Get [CREDENTIALS](https://docs.userdatahub.com/sandbox/credentials) 
* Follow the guide from [DEVELOPER POERTAL](https://docs.telematicssdk.com)

# Authentication
To create a user on datamotion platform, you require to use InstanceID and InstanceKEY. You can get it in Datahub -> management -> user-service credentials

Once you create a user, you will get Device token, JWT token and refresh token. then, you will use it for APIs

### Available Operations

